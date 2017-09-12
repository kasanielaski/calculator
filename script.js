/* eslint no-new:0 */
/* global document, Vue */
document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: '#calc',
		data() {
			return {
				first: '',
				second: '',
				result: 0
			};
		},
		methods: {
			plus() {
				this.result = parseInt(this.first, 10) + parseInt(this.second, 10);
			},
			minus() {
				this.result = parseInt(this.first, 10) - parseInt(this.second, 10);
			},
			multiply() {
				this.result = parseInt(this.first, 10) * parseInt(this.second, 10);
			},
			division() {
				this.result = parseInt(this.first, 10) / parseInt(this.second, 10);
			}
		}
	});
});
