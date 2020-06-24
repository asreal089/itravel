import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Select } from 'react-materialize';
import { DatePicker } from 'react-materialize';
import { Button } from 'react-materialize';

class Travels extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cidade_origem: '',
			cidade_destino: '',
			data_ida: '',
			data_volta: '',
		};

		this.handleChangeCidadeOrigem = this.handleChangeCidadeOrigem.bind(
			this
		);
		this.handleChangeCidadeDestino = this.handleChangeCidadeDestino.bind(
			this
		);
		this.handleChangeDataIda = this.handleChangeDataIda.bind(this);
		this.handleChangeDataVolta = this.handleChangeDataVolta.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeCidadeOrigem(event) {
		this.setState({ cidade_origem: event.target.value });
	}

	handleChangeCidadeDestino(event) {
		this.setState({ cidade_destino: event.target.value });
	}

	handleChangeDataIda(event) {
		this.setState({ data_ida: event });
	}

	handleChangeDataVolta(event) {
		this.setState({ data_volta: event });
	}

	handleSubmit(event) {
		alert(
			'cidade origem: ' +
				this.state.cidade_origem +
				'\n cidade destino: ' +
				this.state.cidade_destino +
				'\n data ida :' +
				this.state.data_ida +
				'\n data volta :' +
				this.state.data_volta
		);
		event.preventDefault();
	}

	componentDidMount() {
		if (!this.props.auth) {
			this.props.history.push(`/`);
		}

		console.log(this.props.fetchHotel());
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
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
								value={this.state.cidade_origem}
								onChange={this.handleChangeCidadeOrigem}
							>
								<option disabled value="">
									Escolha sua origem
								</option>
								<option value="saopaulo">São Paulo</option>
								<option value="londres">Londres</option>
								<option value="paris">Paris</option>
							</Select>

							<DatePicker
								id="DatePicker-1"
								options={{
									yearRange: 10,
								}}
								value={this.state.data_ida}
								onChange={this.handleChangeDataIda}
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
								value={this.state.cidade_destino}
								onChange={this.handleChangeCidadeDestino}
							>
								<option disabled value="">
									Escolha seu destino
								</option>
								<option value="saopaulo">São Paulo</option>
								<option value="londres">Londres</option>
								<option value="paris">Paris</option>
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
								value={this.state.data_volta}
								onChange={this.handleChangeDataVolta}
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
				</form>
			</div>
		);
	}
}
function mapStateToProps({ auth, hotel }) {
	return { auth, hotel };
}

export default connect(mapStateToProps, actions)(Travels);
