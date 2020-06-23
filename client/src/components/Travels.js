import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Select } from 'react-materialize';
import { DatePicker } from 'react-materialize';
import { Button } from 'react-materialize';

class Travels extends Component {
	componentDidMount() {
		if (!this.props.auth) {
			this.props.history.push(`/`);
		}

		console.log(this.props.fetchHotel());
	}
	render() {
		return (
			<div>
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
					}}
				>
					<div style={{ width: '45%', alignSelf: 'left' }}>
						<p>Escolha origem e data de partida:</p>
						<Select
							id="Select-9"
							multiple={false}
							onChange={function noRefCheck() {}}
							options={{
								classes: '',
								dropdownOptions: {
									alignment: 'left',
									autoTrigger: true,
									closeOnClick: true,
									constrainWidth: true,
									coverTrigger: true,
									hover: false,
									inDuration: 150,
									onCloseEnd: null,
									onCloseStart: null,
									onOpenEnd: null,
									onOpenStart: null,
									outDuration: 250,
								},
							}}
							value=""
						>
							<option disabled value="">
								Escolha sua origem
							</option>
							<option value="1">Option 1</option>
							<option value="2">Option 2</option>
							<option value="3">Option 3</option>
						</Select>

						<DatePicker
							id="DatePicker-5"
							options={{
								autoClose: false,
								container: null,
								defaultDate: null,
								disableDayFn: null,
								disableWeekends: false,
								events: [],
								firstDay: 0,
								format: 'mmm dd, yyyy',
								i18n: {
									cancel: 'Cancel',
									clear: 'Clear',
									done: 'Ok',
									months: [
										'January',
										'February',
										'March',
										'April',
										'May',
										'June',
										'July',
										'August',
										'September',
										'October',
										'November',
										'December',
									],
									monthsShort: [
										'Jan',
										'Feb',
										'Mar',
										'Apr',
										'May',
										'Jun',
										'Jul',
										'Aug',
										'Sep',
										'Oct',
										'Nov',
										'Dec',
									],
									nextMonth: '›',
									previousMonth: '‹',
									weekdays: [
										'Sunday',
										'Monday',
										'Tuesday',
										'Wednesday',
										'Thursday',
										'Friday',
										'Saturday',
									],
									weekdaysAbbrev: [
										'S',
										'M',
										'T',
										'W',
										'T',
										'F',
										'S',
									],
									weekdaysShort: [
										'Sun',
										'Mon',
										'Tue',
										'Wed',
										'Thu',
										'Fri',
										'Sat',
									],
								},
								isRTL: false,
								maxDate: null,
								minDate: null,
								onClose: null,
								onDraw: null,
								onOpen: null,
								onSelect: null,
								parse: null,
								setDefaultDate: false,
								showClearBtn: false,
								showDaysInNextAndPreviousMonths: false,
								showMonthAfterYear: false,
								yearRange: 10,
							}}
						>
							Ida
						</DatePicker>
					</div>
					<div style={{ width: '10%' }}></div>
					<div style={{ width: '45%', alignSelf: 'left' }}>
						<p>Escolha tambem destino e data da volta:</p>
						<Select
							id="Select-9"
							multiple={false}
							onChange={function noRefCheck() {}}
							options={{
								classes: '',
								dropdownOptions: {
									alignment: 'left',
									autoTrigger: true,
									closeOnClick: true,
									constrainWidth: true,
									coverTrigger: true,
									hover: false,
									inDuration: 150,
									onCloseEnd: null,
									onCloseStart: null,
									onOpenEnd: null,
									onOpenStart: null,
									outDuration: 250,
								},
							}}
							value=""
						>
							<option disabled value="">
								Escolha seu destino
							</option>
							<option value="1">Option 1</option>
							<option value="2">Option 2</option>
							<option value="3">Option 3</option>
						</Select>

						<DatePicker
							id="DatePicker-5"
							options={{
								autoClose: false,
								container: null,
								defaultDate: null,
								disableDayFn: null,
								disableWeekends: false,
								events: [],
								firstDay: 0,
								format: 'mmm dd, yyyy',
								i18n: {
									cancel: 'Cancel',
									clear: 'Clear',
									done: 'Ok',
									months: [
										'January',
										'February',
										'March',
										'April',
										'May',
										'June',
										'July',
										'August',
										'September',
										'October',
										'November',
										'December',
									],
									monthsShort: [
										'Jan',
										'Feb',
										'Mar',
										'Apr',
										'May',
										'Jun',
										'Jul',
										'Aug',
										'Sep',
										'Oct',
										'Nov',
										'Dec',
									],
									nextMonth: '›',
									previousMonth: '‹',
									weekdays: [
										'Sunday',
										'Monday',
										'Tuesday',
										'Wednesday',
										'Thursday',
										'Friday',
										'Saturday',
									],
									weekdaysAbbrev: [
										'S',
										'M',
										'T',
										'W',
										'T',
										'F',
										'S',
									],
									weekdaysShort: [
										'Sun',
										'Mon',
										'Tue',
										'Wed',
										'Thu',
										'Fri',
										'Sat',
									],
								},
								isRTL: false,
								maxDate: null,
								minDate: null,
								onClose: null,
								onDraw: null,
								onOpen: null,
								onSelect: null,
								parse: null,
								setDefaultDate: false,
								showClearBtn: false,
								showDaysInNextAndPreviousMonths: false,
								showMonthAfterYear: false,
								yearRange: 10,
							}}
						>
							Volta
						</DatePicker>
					</div>
				</div>
				<Button
					node="button"
					style={{
						marginRight: '5px',
						backgroundColor: 'Purple',
					}}
					waves="light"
				>
					Pesquisar
				</Button>
			</div>
		);
	}
}
function mapStateToProps({ auth, hotel }) {
	return { auth, hotel };
}

export default connect(mapStateToProps, actions)(Travels);
