﻿(function (jsPDFAPI) {
var callAddFont = function () {
this.addFileToVFS('NotoSansCJKjp-Regular-normal.ttf', font);
this.addFont('NotoSansCJKjp-Regular-normal.ttf', 'NotoSansCJKjp-Regular', 'normal');
};
jsPDFAPI.events.push(['addFonts', callAddFont])
 })(jsPDF.API);