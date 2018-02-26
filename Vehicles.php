<?php

namespace php/Vehicles;

class Vehicle {

	public $brand = '';
	public $seats  = '';
	public $fuel_capacity = '';
	public $license_plate = '';

	private $fuel_level = 0;
	private $current_speed = 0;
	private $state = 'OFF';
}
?>