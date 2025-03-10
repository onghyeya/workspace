package com.green.member_manager.service;

import com.green.member_manager.dto.MemberDTO;

import java.util.List;

public interface MemberService {
  public List<MemberDTO> selectMemberList();
  public int insertMember(MemberDTO memberDTO);
  public MemberDTO findMemberByMemId(String memId);
  public void deleteMember(String memId);
  public int updateMember(MemberDTO memberDTO);

}
