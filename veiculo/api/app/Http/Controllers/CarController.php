<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;    

class CarController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Auth::user()->cars->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Car::create([
            'name' =>$request->name,
            'marca' =>$request->marca,
            'valor' =>$request->valor,
            'user_id' =>Auth::user()->id
            
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function show(Car $car)
    {
        if($car->user->id != Auth::user()->id) {
            return response('', 403);
        }
        return $car->toJson();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Car $car)
    {
        if($car->user->id != Auth::user()->id) {
            return response('', 403);
        }
        $car->name= $$request->name;
        $car->marca= $$request->marca;
        $car->valor= $$request->valor;
        $car->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function destroy(Car $car)
    {
        if($car->user->id != Auth::user()->id) {
            return response('', 403);
        }
        $$car->delete();
    }
}
