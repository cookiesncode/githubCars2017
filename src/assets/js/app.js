import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
import './lib/jquery.feedme';

$(document).foundation();

$('.comm-events').feedMe({
  category : 5,
  quantity : 10
});

$('.reporting-status').feedMe({
  category: 7923
});

$('.recent-news').feedMe({
  category : 7924
});
