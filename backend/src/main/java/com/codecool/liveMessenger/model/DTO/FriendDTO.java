package com.codecool.liveMessenger.model.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class FriendDTO {
    private String name;
    private Long id;
}
