<template>
    <div>
        <button @click='toggleShow' class='anchor'>select</button>
        <div v-if="showMenu" class='menu'>
            <div class='menu-item' v-for='item in this.items' @click='itemClicked(item)'>{{item}}</div>

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>