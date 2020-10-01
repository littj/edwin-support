/**
 * EDWIN SUPPORT FORM
 */

var form_url, cat1, cat2, cat1_selected;

function getSubCategories() {
    cat1 = document.getElementById("es-cat1");
    cat2 = document.getElementById("es-cat2");
    form_url = cat1.options[cat1.selectedIndex].dataset.url;
    cat1_selected = cat1.options[cat1.selectedIndex].value;

    switch (cat1_selected) {
        // OPTION: Edwin App
        case "1":
            cat2.style.display = "block"; // Reveal second select dropdown
            cat2.options.length = 0; // Prevent options from being appended to a previous selection
            cat2.options[0] = new Option("-", "-");
            cat2.options[1] = new Option("Login or loading issues", "1");
            cat2.options[2] = new Option("Stuck on spinning wheel/screen", "2");
            cat2.options[3] = new Option("Error 200", "3");
            cat2.options[4] = new Option("Error 300", "4");
            cat2.options[5] = new Option("Collections", "5");
            cat2.options[6] = new Option("Dashboard", "6");
            cat2.options[7] = new Option("Other", "7");

            break;

        // OPTION: Edwin Device
        case "2":
            cat2.style.display = "block";
            cat2.options.length = 0;
            cat2.options[0] = new Option("-", "-");
            cat2.options[1] = new Option("Lost device/case/charger", "1");
            cat2.options[2] = new Option("Defective device/case/charger", "2");
            cat2.options[3] = new Option("Additonal swap devices needed", "3");
            cat2.options[4] = new Option("Cracked screen", "4");
            cat2.options[5] = new Option("Other", "5");

            break;

        // OPTION: Edwin User Licensing
        case "3":
            cat2.style.display = "block";
            cat2.options.length = 0;
            cat2.options[0] = new Option("-", "-");
            cat2.options[1] = new Option("Multiple classroom/grade pilot", "1");
            cat2.options[2] = new Option("Free individual teacher trial", "2");
            cat2.options[3] = new Option("Other", "3");

            break;

        // OPTION: Partner Apps
        case "4":
            cat2.style.display = "none";
            cat2.options.length = 0;
            window.location.assign("form-partners.html?cat1=4");

            break;

        // OPTION: Other
        case "5":
            cat2.style.display = "none";
            cat2.options.length = 0;
            window.location.assign("form-device.html?cat1=5");

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
    window.location.assign(form_url + "?cat1=" + cat1_selected + "&cat2=" + cat2_selected);
}

/**
 * SET SELECTION
 */
const queryString = window.location.search; // Query String from URL
const urlParams = new URLSearchParams(queryString); // Query string parameters
var cat1_param = urlParams.get("cat1");
cat1.value = cat1_param; // Set category 1 selection dropdown to the value the user selected previously

// CHeck for cat 2? Do stuff...
