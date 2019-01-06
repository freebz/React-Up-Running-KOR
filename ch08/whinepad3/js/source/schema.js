/* @flow */

import classification from './classification';

export default [
    {
	id: 'name',
	label: 'Name',
	show: true, // `Excel` 테이블에 표시 여부
	sample: '$2 chuck',
	align: 'left', // `Excel` 내 정렬
    },
    {
	id: 'year',
	label: 'Year',
	type: 'year',
	show: true,
	sample: 2015,
    },
    {
	id: 'grape',
	label: 'Grape',
	type: 'suggest',
	options: classification.grapes,
	show: true,
	sample: 'Merlot',
	align: 'left',
    },
    {
	id: 'rating',
	label: 'Rating',
	type: 'rating',
	show: true,
	sample: 3,
    },
    {
	id: 'comments',
	label: 'Comments',
	type: 'text',
	sample: 'Nice for the price',
    },
]
