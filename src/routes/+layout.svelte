<script>
  import "../app.css";
  import Navigation from '../components/Nav.svelte';
  import Alert from '../components/Alert.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<Navigation />
<div>
  <Alert />
  <slot />
</div>
<Footer />