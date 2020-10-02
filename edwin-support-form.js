/**
 * EDWIN SUPPORT FORM
 */

var form_url;
var cat1 = document.getElementById("es-cat1");
var cat2 = document.getElementById("es-cat2");

// Initial options for category 1 selection dropdown
cat1.options[0] = new Option("-", "-");
cat1.options[1] = new Option("Edwin App", "1");
cat1.options[1].setAttribute('data-url', 'form1.html');
cat1.options[2] = new Option("Edwin Device", "2");
cat1.options[2].setAttribute('data-url', 'form-device.html');
cat1.options[3] = new Option("Edwin User Licensing", "3");
cat1.options[3].setAttribute('data-url', 'form2.html');
cat1.options[4] = new Option("Partner Apps", "4");
cat1.options[5] = new Option("Other", "5");


function getSubCategories(cat1_selected = false) {
    // var cat1 = document.getElementById("es-cat1");
    // var cat2 = document.getElementById("es-cat2");

    if (!cat1_selected) {
        form_url = cat1.options[cat1.selectedIndex].dataset.url;
        window.cat1_selected = cat1.options[cat1.selectedIndex].value;
    } else {
        window.cat1_selected = cat1_selected;
    }

    switch (window.cat1_selected) {
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
            window.location.assign("partners.html?cat1=4");

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

    var cat2_selected = cat2.options[cat2.selectedIndex].value;

    // On new page? Get form_url
    if (form_url !== undefined) {
        window.location.assign(
            form_url + "?cat1=" + cat1_selected + "&cat2=" + cat2_selected
        );
    } /* else {
        form_url = cat1.options[cat1.selectedIndex].dataset.url;
        window.location.assign(
            form_url + "?cat1=" + cat1_selected + "&cat2=" + cat2_selected
        );
    } */
}

/**
 * SET SELECTION
 */
const queryString = window.location.search; // Query String from URL
const urlParams = new URLSearchParams(queryString); // Query string parameters
var cat1_param = urlParams.get("cat1");
var cat2_param = urlParams.get("cat2");
var cat2_check = false;

if (cat1_param !== null && cat2_param !== null) {
    // Set category 1 and 2 selection dropdown to the values the user selected previously
    cat1.value = cat1_param;
    getSubCategories(cat1_param);
    cat2.value = cat2_param;
    cat2.style.display = "block";
}

if (!cat2_check) {
    cat1.value = cat1_param;
    cat2_check = true;
}