/**
 * Styles that are not specific to any component.
 *
 * **These should be extremely rare!**
 */

const globalStylesClassnames = {
  /**
   * Used for hiding content in a way that it can still be read by screen
   * readers. Do not use for focusable elements.
   *
   * @see <https://webaim.org/blog/hiding-content-for-screen-readers/>
   */
  hiddenInVisualMedia: 'hidden-in-visual-media'
};

const globalStyles = {
  '@global .hidden-in-visual-media': {
    position: 'absolute',
    left: '-10000px',
    top: 'auto',
    width: '1px',
    height: '1px',
    overflow: 'hidden'
  }
};

export default globalStyles;
export { globalStylesClassnames };
