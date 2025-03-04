package in.ac.iitb.newspaperclaim.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.ac.iitb.newspaperclaim.entity.HrNewsPaperClaims;
import in.ac.iitb.newspaperclaim.repo.HrNewsPaperClaimsRepo;
import in.ac.iitb.newspaperclaim.service.HrNewsPaperClaimsService;

@Service
public class HrNewsPaperClaimsServiceImpl implements HrNewsPaperClaimsService{

	@Autowired
	private HrNewsPaperClaimsRepo hrNewsPaperClaimsRepo;
	
	@Override
	public String saveNewsPaperClaims(HrNewsPaperClaims hrNewsPaperClaims) {
		hrNewsPaperClaimsRepo.save(hrNewsPaperClaims);
		return "saved";
	}

}
