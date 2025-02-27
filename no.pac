function FindProxyForURL(url,host)
{
	var proxy = "PROXY 159.226.140.241:8888";
	var domainList = ["*.wanfangdata.com.cn","*.acm.org","*.acs.org","*.aiaa.org","*.annualreviews.org","*.aps.org","*.bentham-direct.org","*.cambridge.org","*.clarivate.com","*.cnki.net","*.cqvip.com","*.csdl.ac.cn","*.dimensions.ai","*.ebscohost.com","*.emerald.com","*.engineeringvillage.com","*.eurekaselect.com","*.ieee.org","*.iop.org","*.las.ac.cn","*.nature.com","*.optica.org","*.pnas.org","*.pqdtcn.com","*.proquest.com","*.reaxys.com","*.royalsocietypublishing.org","*.rsc.org","*.science.org","*.sciencechina.ac.cn","*.sciencechina.cn","*.sciencedirect.com","*.scitation.org","*.scopus.com","*.spiedigitallibrary.org","*.springer.com","*.tandfonline.com","*.wanfangdata.com.cn","*.webofscience.com","*.wiley.com","*.worldscientific.com","*.clas.ac.cn","*.webofknowledge.com","*.clarivate.cn","*.elsevier.com","*.wileyonlinelibrary.com","*.grapeshot.co.uk","*.scienceconnect.io","*.osano.com","*.elseviercdn.cn","104.70.235.49","159.226.100.28","23.200.142.176"];

	for ( var i=0 ; i < domainList.length ; ++i ) 
	{
		if (shExpMatch(host, domainList[i]))
			return proxy;
	}

	return "DIRECT";
}
