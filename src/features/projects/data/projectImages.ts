const projectAsset = (projectId: string, fileName: string) =>
  `${import.meta.env.BASE_URL}assets/projects/${projectId}/${fileName}`;

export const getProjectImages = (projectId: string) => [
  projectAsset(projectId, 'screen-1.svg'),
  projectAsset(projectId, 'screen-2.svg'),
  projectAsset(projectId, 'screen-3.svg'),
  projectAsset(projectId, 'screen-4.svg'),
  projectAsset(projectId, 'screen-5.svg'),
];
