/**
 * Default configuration options
 * @exports {component(config)}
 */

'use strict'

/* Exports -------------------------------------------------------------------*/

module.exports = {
	pkgName: 'config',
	attributes: {
		debug: {
			noColor: false
		},
		connections: {
			poolSize: 2,
			ipc: {
				evt: 'message',
				path: '/tmp/'
			},
			tcp: {
				port: 5001
			},
			udp: {
				port: 6001
			}
		}
	}
};