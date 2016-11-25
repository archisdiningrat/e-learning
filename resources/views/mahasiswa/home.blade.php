@extends('mahasiswa.layout.app')

@section('page_title','Home')

@section('content')
<div class="content">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    You are logged in as {{Auth::guard('mahasiswa')->user()->nama}}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
