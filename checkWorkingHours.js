// middleware to check working hours
function checkWorkingHours(req, res, next) {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
    if (currentDay >= 1 &&
        currentDay <= 5 &&
        currentHour >= 9 &&
        currentHour <= 17) {
            console.log({currentDay, currentHour, open: true});
        next();
    } else {
        console.log({currentDay, currentHour});

        res.render("closed");
    }
}
// exports.checkWorkingHours = checkWorkingHours;
module.exports = { checkWorkingHours };
