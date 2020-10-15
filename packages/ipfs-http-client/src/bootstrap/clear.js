'use strict'

const configure = require('../lib/configure')
const toUrlSearchParams = require('../lib/to-url-search-params')

module.exports = configure(api => {
  /**
   * @type {import('..').Implements<import('../../../ipfs-core/src/components/bootstrap/clear')>}
   */
  async function clear (options = {}) {
    const res = await api.post('bootstrap/rm', {
      timeout: options.timeout,
      signal: options.signal,
      searchParams: toUrlSearchParams({
        ...options,
        all: true
      }),
      headers: options.headers
    })

    return res.json()
  }

  return clear
})
