package com.nativewithanimationmodule;

import android.R
import android.app.Activity
import android.os.Bundle
import android.widget.TextView


class MessageShow : Activity() {
    public override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_list_item)

        val intent = intent
        val str = intent.getStringExtra("message")

        val textView: TextView = findViewById(R.id.text1) as TextView
        textView.setOnClickListener {
            textView.text = str
        }

    }
}