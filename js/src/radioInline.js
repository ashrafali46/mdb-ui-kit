import Radio from './radio'

const RadioInline = (($) => {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  const NAME = 'radioInline'
  const DATA_KEY = `mdb.${NAME}`
  const JQUERY_NAME = `mdb${NAME.charAt(0).toUpperCase() + NAME.slice(1)}`
  const JQUERY_NO_CONFLICT = $.fn[JQUERY_NAME]

  const Default = {}

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */
  class RadioInline extends Radio {

    constructor(element, config, properties = {inputType: 'radio', outerClass: 'radio-inline'}) {
      super(element, $.extend({}, Default, config), properties)
    }

    dispose() {
      super.dispose(DATA_KEY)
    }

    // ------------------------------------------------------------------------
    // protected

    // ------------------------------------------------------------------------
    // protected

    // ------------------------------------------------------------------------
    // private

    // ------------------------------------------------------------------------
    // static
    static _jQueryInterface(config) {
      return this.each(function () {
        let $element = $(this)
        let data = $element.data(DATA_KEY)

        if (!data) {
          data = new RadioInline(this, config)
          $element.data(DATA_KEY, data)
        }
      })
    }
  }

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
  $.fn[JQUERY_NAME] = RadioInline._jQueryInterface
  $.fn[JQUERY_NAME].Constructor = RadioInline
  $.fn[JQUERY_NAME].noConflict = () => {
    $.fn[JQUERY_NAME] = JQUERY_NO_CONFLICT
    return RadioInline._jQueryInterface
  }

  return RadioInline

})(jQuery)

export default RadioInline