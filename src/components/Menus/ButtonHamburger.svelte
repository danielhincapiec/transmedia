<script>
	function toggleClass() {
		const target = document.querySelector(".js-target-main-menu");
		target.classList.toggle("show");
	}
</script>

<button
	on:click={toggleClass}
	class="md:hidden flex justify-between flex-col cursor-pointer p-2 size-8 flex-shrink-0"
>
	<div class="line h-[1px] bg-white"></div>
	<div class="line h-[1px] bg-white"></div>
	<div class="line h-[1px] bg-white"></div>
</button>
