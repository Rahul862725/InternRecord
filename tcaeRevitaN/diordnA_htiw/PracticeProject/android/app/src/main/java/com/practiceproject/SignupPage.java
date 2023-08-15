package com.practiceproject;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class SignupPage extends Activity {
    public static String Name="",Password="",Email="";
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.singup_main);

        EditText name=(EditText) findViewById(R.id.name);
        EditText Email=(EditText) findViewById(R.id.email);
        EditText Password=(EditText) findViewById(R.id.password);
        Intent obj= new Intent(getApplicationContext(),LoginPage.class);
        Button but=(Button) findViewById(R.id.button);
        Button but1=(Button) findViewById(R.id.button1);

        but.setOnClickListener(view -> {
            //code
            SignupPage.Name=name.getText().toString();
            String email=Email.getText().toString();
            SignupPage.Email=email;
            System.out.println(email+"Email is"+SignupPage.Email);
            String pass=Password.getText().toString();
            SignupPage.Password=pass;
            startActivity(obj);
        });
        but1.setOnClickListener((view)->{

            startActivity(obj);
        });

    }
}
