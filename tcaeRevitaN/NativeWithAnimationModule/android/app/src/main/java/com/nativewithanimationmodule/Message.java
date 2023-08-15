package com.nativewithanimationmodule;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class Message extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
         TextView text=(TextView) findViewById(R.id.text);
        Intent intent = getIntent();
        String str = intent.getStringExtra("message");

        text.setText(str);
    }
}
