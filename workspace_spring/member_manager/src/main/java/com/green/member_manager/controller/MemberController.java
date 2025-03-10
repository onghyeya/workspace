package com.green.member_manager.controller;

import com.green.member_manager.dto.MemberDTO;
import com.green.member_manager.service.MemberService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/members")
public class MemberController {
  private MemberService memberService ;

  public MemberController(MemberService memberService) {
    this.memberService = memberService;
  }

  @GetMapping("")
  public List<MemberDTO> getMemberList(){
    return memberService.selectMemberList();
  }

  @PostMapping("")
  public int insertMember(@RequestBody MemberDTO memberDTO){
    return memberService.insertMember(memberDTO);
  }

  @GetMapping("/{memId}")
  public MemberDTO findMemberByMemId(@PathVariable("memId") String memId){
    return memberService.findMemberByMemId(memId);
  }

  @DeleteMapping("/{memId}")
  public void deleteMember(@PathVariable("memId") String memId){
    memberService.deleteMember(memId);
  }

  @PutMapping("/{memId}")
  public int updateMember(@PathVariable("memId") String memId,@RequestBody MemberDTO memberDTO) {
    memberDTO.setMemId(memId);
    return memberService.updateMember(memberDTO);
  }

}
