/** */

var form_url;

function getSubCategories() {
    var cat1 = document.getElementById("es-cat1");
    var cat2 = document.getElementById("es-cat2");
    var partner_apps = document.getElementById("partner-apps");
    form_url = cat1.options[cat1.selectedIndex].dataset.url;
    var cat1_selected = cat1.options[cat1.selectedIndex].value;

    switch (cat1_selected) {
        case "Edwin App":
            cat2.style.display = "block"; // Reveal second select dropdown
            cat2.options.length = 0; // Prevent options from being appended to a previous selection
            cat2.options[0] = new Option("-", "-");
            cat2.options[1] = new Option(
                "Login or loading issues",
                "Login or loading issues"
            );
            cat2.options[2] = new Option(
                "Stuck on spinning wheel/screen",
                "Stuck on spinning wheel/screen"
            );
            cat2.options[3] = new Option("Error 200", "Error 200");
            cat2.options[4] = new Option("Error 300", "Error 300");
            cat2.options[5] = new Option("Collections", "Collections");
            cat2.options[6] = new Option("Dashboard", "Dashboard");
            cat2.options[7] = new Option("Other", "Other");

            break;

        case "Edwin Device":
            cat2.style.display = "block";
            cat2.options.length = 0;
            cat2.options[0] = new Option("-", "-");
            cat2.options[1] = new Option(
                "Lost device/case/charger",
                "Lost device/case/charger"
            );
            cat2.options[2] = new Option(
                "Defective device/case/charger",
                "Defective device/case/charger"
            );
            cat2.options[3] = new Option(
                "Additonal swap devices needed",
                "Additonal swap devices needed"
            );
            cat2.options[4] = new Option("Cracked screen", "Cracked screen");
            cat2.options[5] = new Option("Other", "Other");

            break;

        case "Edwin User Licensing":
            cat2.style.display = "block";
            cat2.options.length = 0;
            cat2.options[0] = new Option("-", "-");
            cat2.options[1] = new Option(
                "Multiple classroom/grade pilot",
                "Multiple classroom/grade pilot"
            );
            cat2.options[2] = new Option(
                "Free individual teacher trial",
                "Free individual teacher trial"
            );
            cat2.options[3] = new Option("Other", "Other");

            break;

        case "Partner Apps":
            cat2.style.display = "none";
            cat2.options.length = 0;
            window.location.assign("form-partners.html?cat1=Partner Apps");

            break;

        case "Other":
            cat2.style.display = "none";
            cat2.options.length = 0;
            window.location.assign("form-device.html?cat1=Other");

            break;

        default:
            cat2.style.display = "none";
            break;
    }
}

function getForm() {
    // Get URL from previous selection (form_url)
    // Get value of current selection
    // Append form_value and current selection value to URL

    var cat2 = document.getElementById("es-cat2");
    var cat2_selected = cat2.options[cat2.selectedIndex].value;
    window.location.assign(form_url + "?cat1=" + cat2_selected);
}

/**
 * SET SELECTION
 */
const queryString = window.location.search; // Query String from URL
const urlParams = new URLSearchParams(queryString); // Query string parameters
var cat1_param = urlParams.get("cat1");
var cat1 = document.getElementById("es-cat1");
cat1.value = cat1_param; // Set category 1 selection dropdown to the value the user selected previously
