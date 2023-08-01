<script>
	// export let data;
	// const { users } = data;

	let name;
	let email;

	const onClick = async () => {
		const body = {
			name,
			email
		};

		const res = await fetch('/api/user', {
			method: 'POST',
			body: JSON.stringify(body)
		});

		const data = await res.json();
		console.log('data :>> ', data);
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- {#each users as user}
	<li>id : {user.id}</li>
	<li>email : {user.email}</li>
	<li>name : {user.name}</li>
{/each} -->

<div>
	<input type="text" bind:value={name} />
	<input type="text" bind:value={email} />
	<button on:click={onClick}>전송</button>
</div>
