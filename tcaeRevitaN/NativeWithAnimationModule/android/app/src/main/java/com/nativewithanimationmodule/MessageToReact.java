package com.nativewithanimationmodule;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class MessageToReact extends Activity {



    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.message_rn);
        EditText text=(EditText) findViewById(R.id.text);

        Button but=(Button) findViewById(R.id.button);
        but.setOnClickListener(view->{

//           Intent obj=new Intent(getApplicationContext(),Messagemodule.class);
//           startActivity(obj);
            Intent obj=getIntent();
            System.out.println(text.getText()+"inside react");
            obj.putExtra("message", text.getText().toString());
            setResult(111,obj);
            finish();
        });
    }
}
