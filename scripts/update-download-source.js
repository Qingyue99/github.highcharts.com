/**
 * Script to update the version of Highcharts JS used with the Highcharts Download Builder.
 * @author Jon Arild Nygard
 * @todo Add license
 * @todo Cache multiple Highcharts versions, then use the cached version in stead of a manually updated library.
 */
'use strict'
const U = require('../app/filesystem.js')
let files = U.getFilesInFolder('../highcharts/', true, 'js').concat(U.getFilesInFolder('../highcharts/', true, 'css'))
files.filter(file => (file.endsWith('.js') || file.endsWith('.scss'))).forEach(file => {
  U.copyFile('../../highcharts/' + file, '../source/download/' + file)
})
