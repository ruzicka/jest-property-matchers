module.exports = {
  /** resolves from test to snapshot path */
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    return  testPath.replace("dist/", "src/") + snapshotExtension;
  },

  /** resolves from snapshot to test path */
  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    return snapshotFilePath.replace("src/", "dist/").slice(0, -snapshotExtension.length);
  },

  testPathForConsistencyCheck: 'dist/index.test.js',
};
