<script>
	function toggleClass() {
		const target = document.querySelector(".js-target-main-menu");
		target.classList.toggle("show");
	}
</script>

<button
	on:click={toggleClass}
	class="flex justify-between flex-col cursor-pointer p-2 size-8 flex-shrink-0"
>
	<div class="line h-[2px] bg-black"></div>
	<div class="line h-[2px] bg-black"></div>
	<div class="line h-[2px] bg-black"></div>
</button>
