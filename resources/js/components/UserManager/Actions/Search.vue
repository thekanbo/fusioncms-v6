<template>
	<p-input name="search" placeholder="Search" v-model="search"></p-input>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		name: 'user-manager-search-action',

		computed: {
			search: {
                get() {
                    return this.$store.state.usermanager.search
                },

                set(value) {
                	this.setSearch(value)
                }
            }
		},

		watch: {
			search(value) {
                this.fetchUsers()
            },
		},

		methods: {
			...mapActions({
				fetchUsers: 'usermanager/fetchUsers',
				setSearch:  'usermanager/setSearch'
			})
		}
	}
</script>