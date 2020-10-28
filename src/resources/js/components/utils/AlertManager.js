import toast from 'izitoast'

export const AlertManager = {
  /**
   * Show an error alert.
   *
   * @param message
   * @param options
   */
  error: function(message, options) {
    options = $.extend({
      title: '',
      message: message,
      position: 'bottomCenter',
      layout: 2,
      timeout: 2200,
    }, options)

    toast.error(options)
  },
  success: function(message, options) {
    options = $.extend({
      title: '',
      message: message,
      position: 'bottomCenter',
      layout: 2,
    }, options)

    toast.success(options)
  },
}
