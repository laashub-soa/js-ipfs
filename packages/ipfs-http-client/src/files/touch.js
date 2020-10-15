'use strict'

const configure = require('../lib/configure')
const toUrlSearchParams = require('../lib/to-url-search-params')

module.exports = configure(api => {
  /**
   * @type {import('..').Implements<typeof import('../../../ipfs-core/src/components/files/touch')>}
   */
  async function touch (path, options = {}) {
    const res = await api.post('files/touch', {
      timeout: options.timeout,
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: path,
        ...options
      }),
      headers: options.headers
    })

    await res.text()
  }

  return touch
})
