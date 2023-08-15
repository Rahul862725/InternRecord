package com.practiceproject;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class LoginPage extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        EditText Email=(EditText) findViewById(R.id.email);
        EditText Password=(EditText) findViewById(R.id.password);

        Button but=(Button) findViewById(R.id.button);

        but.setOnClickListener(view -> {
            //code
            String email=Email.getText().toString();
            System.out.println(email);
            String pass=Password.getText().toString();
            System.out.println(SignupPage.Email+" "+SignupPage.Password);
            if(email.equals(SignupPage.Email)&&pass.equals(SignupPage.Password))
            {
                Toast.makeText(getApplicationContext(),"Login Successful!",Toast.LENGTH_LONG).show();
            }
            else {
                Toast.makeText(getApplicationContext(),"Unsuccessful!",Toast.LENGTH_LONG).show();
            }
        });
    }
}
