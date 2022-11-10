const fetchInfo = function () {
    $.ajax('/api/info').done(function (info) {
        $('#brother').text(info.brother);
        $('#time').text(info.time);
        $('#uptime').text(info.uptime);
    })
};

setInterval(fetchInfo, 2000);

// const fetchBrother = function () {
//     $.ajax('/api/brother').done(function (name) {
//         $('#brother').text(name);
//     });
// };

// setInterval(fetchBrother, 2000); // polling

// const fetchTime = function () {
//     $.ajax('/api/time').done(function (time) {
//         $('#time').text(time);
//     })
// };
// setInterval(fetchTime, 1000);

// const fetchUptime = function () {
//     $.ajax('/api/uptime').done(function (uptime) {
//         $('#uptime').text(uptime);
//     });
// };
// setInterval(fetchUptime, 4000);

// const fetchButterflies = function () {
//     $.ajax('/butterflies').done(function (butterflies) {
//         console.table(butterflies);
//         butterflies.forEach(function (butterfly) {
//             $(`<p>${ butterfly.name }</p>`).appendTo(document.body);
//         });
//     });
// };

// fetchButterflies();