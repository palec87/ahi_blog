<script>
    export let partner;
</script>

<div class="card w-96 p-4 shadow-xl">
    <figure class="bg-base-600 flex justify-center">
        <img src={partner.image} alt={partner.name} class="h-48 object-contain" />
    </figure>
    <div class="card-body">
        <h2 class="card-title">{partner.name}</h2>
        <p>{partner.description}</p>
        <div class="card-actions justify-end">
            {#if partner.website}
                <a href={partner.website} class="text text-primary" target="_blank" aria-label="Partner Website">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" fill="currentColor" viewBox="0 -960 960 960" width="16px">
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
                    </svg>
                </a>
            {/if}
            {#if partner.linkedin}
                <a href={partner.linkedin} target="_blank" class="text text-primary" aria-label="Partner LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                </a>
            {/if}
        </div>
    </div>
</div>

<style>
    .card {
        background-color: var(--base-100);
    }
</style>
  