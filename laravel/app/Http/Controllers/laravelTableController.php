<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\laravelTable;

class laravelTableController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            //code...
        } catch (\Throwable $th) {
            return response()->json($th);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {

            $request->validate([
                'descripcion' => 'required',
                'numero' => 'required'
            ]);

            $newData = new laravelTable();
            $newData->descripcion = $request->input('descripcion');
            $newData->numero = $request->input('numero');

            $res = $newData->save();

            if ($res) {
                return response()->json(['message' => 'Información actualizada correctamente']);
            }
        } catch (\Throwable $th) {
            return response()->json($th);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $data = laravelTable::all();

        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
