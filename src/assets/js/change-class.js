/*

USE

import changeClass from "/event-change-class.js";

eventChangeClass(
	{
		triggers: '.js-trigger',
		targets: '.js-target',
		eventType: 'click',
		pairToClass: 'js-pair-',
		newClass: 'bg',
	}
);

<p class="js-trigger js-pair-1">trigger a</p>
<p class="js-target js-pair-1">target a</p>

*/


function changeClass(
	{
		triggers = '',
		targets = '',
		eventType = 'click',
		pairToClass = 'js-pair-',
		newClass = '',
	} = {}
) {
	const theTriggers = document.querySelectorAll(triggers);
	const theTargets = document.querySelectorAll(targets);

	theTriggers.forEach(trigger => {
		trigger.addEventListener(eventType, () => {

			if (theTargets.length !== 0) {
				theTargets.forEach(target => {
					findPairClassContinuation(trigger, pairToClass) ===
						findPairClassContinuation(target, pairToClass)
						? target.classList.toggle(newClass)
						: null;
				});
			} else {
				console.log('no targets');
			}

		});
	})

	function findPairClassContinuation(element, prefix) {
		const classList = element.classList;

		for (let cls of classList) {
			if (cls.startsWith(prefix)) {
				return cls.substring(prefix.length);
			}
		}

		// console.log('null', 'classList:', classList, 'prefix:', prefix);
		return null

	}
}
export default changeClass;

