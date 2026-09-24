// =========================================
// HOME PAGE
// =========================================

import { loadWeather } from "./weather.mjs";
import { loadSpotlights } from "./spotlights.mjs";

import {
    setupNavigation,
    setupWayfinding,
    setupFooter
} from "./utils.mjs";


// ---------- SHARED FEATURES ----------

setupNavigation();

setupWayfinding();

setupFooter();


// ---------- HOMEPAGE DATA ----------

loadWeather();

loadSpotlights();