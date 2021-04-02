<script>
  import Nav from './components/Nav.svelte'

  let framework = 'svelte.js'
  let bundler = 'parcel.js'
  let css = 'tailwind.css'
</script>

<Nav />

<div class="flex flex-grow justify-center items-center">
  <div class="text-center">
    <h1 class="text-5xl">
      <span class="text-yellow-900">{framework}</span>
      +
      <span class="text-blue-900">{css}</span>
      +
      <span class="text-green-900">{bundler}</span>
      =
      <span class="font-semibold text-red-900">awesome</span>
    </h1>

    <p class="text-3xl mt-4">
      * also includes
      <strong>Prettier</strong>
      and
      <strong>ESLint</strong>
      configs with opinionated settings
    </p>

    <h1>This is a heading</h1>

    <a href="google.com" target="_blank" rel="noopener noreferrer">Link</a>
  </div>
</div>
