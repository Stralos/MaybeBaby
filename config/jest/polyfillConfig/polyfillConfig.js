/* @flow */
/**
 * Self executing function export.
 */
export default (() => {
  global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
  };
})();
