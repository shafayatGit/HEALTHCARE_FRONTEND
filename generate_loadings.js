const fs = require('fs');
const path = require('path');

const baseDirs = [
  path.join(__dirname, 'src', 'app', '(commonLayout)'),
  path.join(__dirname, 'src', 'app', '(dashboardLayout)')
];

function getDirectoriesWithPage(dir, directories) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  let hasPage = false;
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getDirectoriesWithPage(fullPath, directories);
    } else if (file === 'page.tsx' || file === 'layout.tsx') {
      hasPage = true;
    }
  }
  if (hasPage) {
    // Avoid re-adding if already added
    if (!directories.includes(dir)) {
      directories.push(dir);
    }
  }
}

const directories = [];
for (const baseDir of baseDirs) {
  getDirectoriesWithPage(baseDir, directories);
}

directories.forEach(dir => {
  const loadingPath = path.join(dir, 'loading.tsx');
  if (!fs.existsSync(loadingPath)) {
    let folderName = path.basename(dir);
    
    // Remove brackets like (authRouteGroup) or (patientDashboardLayout)
    folderName = folderName.replace(/[\(\)]/g, '');
    
    let componentName = folderName
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
      
    if (!componentName) componentName = 'Default';
    
    if (!componentName.endsWith('Loading')) {
        componentName += 'Loading';
    }

    const title = componentName.replace(/Loading$/, '').replace(/([A-Z])/g, ' $1').trim() || 'Content';

    const content = `import React from 'react';

const ${componentName} = () => {
  return (
    <div>
      <p>Loading ${title}...</p>
    </div>
  );
};

export default ${componentName};
`;
    fs.writeFileSync(loadingPath, content);
    console.log('Created: ' + loadingPath);
  }
});
