<script>
	function toggleClass() {
		const target = document.querySelector(".js-target-main-menu");
		target.classList.toggle("show");
	}
</script>

<button
	on:click={toggleClass}
	class="absolute top-2 right-6 size-10 flex items-center justify-center cursor-pointer group z-20"
>
	<span
		class="absolute top-1/2 right-0 w-full h-[2px] bg-black transition-transform duration-200 ease-in-out rotate-45 group-hover:rotate-90"
	></span>
	<span
		class="absolute top-1/2 left-0 w-full h-[2px] bg-black transition-transform duration-200 ease-in-out -rotate-45 group-hover:-rotate-90"
	></span>
</button>
