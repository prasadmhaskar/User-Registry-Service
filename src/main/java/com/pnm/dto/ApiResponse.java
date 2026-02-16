package com.pnm.dto;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@RequiredArgsConstructor
public class ApiResponse<T> {
    private boolean success;
    private String message;
    private T data;
}
