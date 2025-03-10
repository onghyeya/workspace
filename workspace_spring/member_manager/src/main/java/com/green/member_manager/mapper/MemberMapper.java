package com.green.member_manager.mapper;

import com.green.member_manager.dto.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface MemberMapper {
  public List<MemberDTO> selectMemberList();
  public int insertMember(MemberDTO memberDTO);
  public MemberDTO findMemberByMemId(String memId);
  public void deleteMember(String memId);
  public int updateMember(MemberDTO memberDTO);
}
