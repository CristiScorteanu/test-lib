<template>
	<h1>This is your second button!</h1>
	<br />
	<button class="pink-neon-button">Click me!</button>
</template>

<script setup></script>

<style lang="less">
.pink-neon-button {
	font-size: 20px;
	padding: 10px 20px;
	color: #fff;
	border: none;
	background-color: #ff69b4; /* HotPink color */
	text-transform: uppercase;
	text-decoration: none;
	box-shadow:
		0 0 10px #ff69b4,
		0 0 20px #ff69b4,
		0 0 30px #ff69b4,
		0 0 40px #ff69b4;
	transition: all 0.2s ease-in-out;

	&:hover {
		box-shadow:
			0 0 5px #ff69b4,
			0 0 10px #ff69b4,
			0 0 15px #ff69b4,
			0 0 20px #ff69b4,
			0 0 25px #ff69b4,
			0 0 30px #ff69b4,
			0 0 35px #ff69b4;
	}
}
</style>
