import{_ as o,V as i,n as s,p as n,q as t,J as e,C as r,A as d,a6 as l}from"./framework-43d56897.js";const h={},c=l(`<h1 id="troubleshooting-and-knows-issues" tabindex="-1"><a class="header-anchor" href="#troubleshooting-and-knows-issues" aria-hidden="true">#</a> Troubleshooting and Knows Issues</h1><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2><p>To troubleshoot and resolve issues, you can use the following log files:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/var/log/ubuntu2cloudlinux.log - conversion log 
/var/log/lve-stats.log - lve-stats 
/var/log/dmesg - kernel module 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="knows-issues" tabindex="-1"><a class="header-anchor" href="#knows-issues" aria-hidden="true">#</a> Knows Issues</h2>`,5),u=t("code",null,"alt-python37*",-1),p=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># /sbin/service lvestats try-restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="list-of-alt-python37-packages" tabindex="-1"><a class="header-anchor" href="#list-of-alt-python37-packages" aria-hidden="true">#</a> List of alt-python37* packages:</h4><ul><li>alt-python37</li><li>alt-python37-raven</li><li>alt-python37-simplejson</li><li>alt-python37-sqlalchemy</li><li>alt-python37-alembic</li><li>alt-python37-libs</li><li>alt-python37-markupsafe</li><li>alt-python37-setuptools</li><li>alt-python37-contextlib</li><li>alt-python37-mako</li><li>alt-python27-cllib</li><li>alt-python37-prettytable</li><li>alt-python37-logilab-common</li><li>alt-python37-jinja2</li><li>alt-python37-psycopg2</li><li>alt-sqlite</li></ul><p>Such behavior will be fixed in the upcoming versions.</p><ol start="2"><li>LVE statistics works only with SQLite, other databases (MySQL, postgreSQL) will be available in the next releases.</li><li><code>alt-php*-zts</code> are not available yet.</li><li>The <code>tmpreaper package</code> is using instead of <code>tmpwatch</code>.</li><li>PNG format for LVE Charts does not work correctly on CloudLinux subsystem on Ubuntu (lvechart utility may produce broken images).</li></ol>`,5);function b(m,g){const a=i("RouterLink");return s(),n("div",null,[c,t("ol",null,[t("li",null,[e("Please take into account that if one of the "),r(a,{to:"/sub-system-ubuntu/troubleshooting/#list-of-alt-python37-packages"},{default:d(()=>[u,e(" packages")]),_:1}),e(" is updated you should execute the following command to ensure the proper work of the LVE-stats daemon:")])]),p])}const y=o(h,[["render",b],["__file","index.html.vue"]]);export{y as default};