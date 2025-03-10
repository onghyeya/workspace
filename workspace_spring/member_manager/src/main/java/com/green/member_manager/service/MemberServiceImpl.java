package com.green.member_manager.service;

import com.green.member_manager.dto.MemberDTO;
import com.green.member_manager.mapper.MemberMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberServiceImpl implements MemberService{
  private MemberMapper memberMapper;

  public MemberServiceImpl(MemberMapper memberMapper) {
    this.memberMapper = memberMapper;
  }

  @Override
  public List<MemberDTO> selectMemberList() {
    return memberMapper.selectMemberList();
  }

  @Override
  public int insertMember(MemberDTO memberDTO) {
    return memberMapper.insertMember(memberDTO);
  }

  @Override
  public MemberDTO findMemberByMemId(String memId) {
    return memberMapper.findMemberByMemId(memId);
  }

  @Override
  public void deleteMember(String memId) {
    memberMapper.deleteMember(memId);
  }

  @Override
  public int updateMember(MemberDTO memberDTO) {
    return memberMapper.updateMember(memberDTO);
  }
}
